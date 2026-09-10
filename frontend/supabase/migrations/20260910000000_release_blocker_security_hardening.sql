-- Release-blocker security hardening.
-- This migration is intentionally additive and can be applied after the existing policy migrations.

CREATE OR REPLACE FUNCTION public.get_user_staff_id(_user_id uuid)
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT p.staff_id
  FROM public.profiles AS p
  WHERE p.user_id = auth.uid()
    AND _user_id = auth.uid()
  LIMIT 1;
$$;

REVOKE EXECUTE ON FUNCTION public.get_user_staff_id(uuid) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.get_user_staff_id(uuid) FROM anon;
GRANT EXECUTE ON FUNCTION public.get_user_staff_id(uuid) TO authenticated;

DROP POLICY IF EXISTS "Incidents insert" ON public.incidents;
CREATE POLICY "Incidents insert" ON public.incidents
  FOR INSERT TO authenticated
  WITH CHECK (
    public.has_role(auth.uid(), 'admin')
    OR reported_by = public.get_user_staff_id(auth.uid())
  );

DROP POLICY IF EXISTS "Case notes update" ON public.case_notes;
CREATE POLICY "Case notes update" ON public.case_notes
  FOR UPDATE TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin')
    OR staff_id = public.get_user_staff_id(auth.uid())
  )
  WITH CHECK (
    public.has_role(auth.uid(), 'admin')
    OR staff_id = public.get_user_staff_id(auth.uid())
  );

DROP POLICY IF EXISTS "Shift checkins insert" ON public.shift_checkins;
CREATE POLICY "Shift checkins insert" ON public.shift_checkins
  FOR INSERT TO authenticated
  WITH CHECK (
    public.has_role(auth.uid(), 'admin')
    OR staff_id = public.get_user_staff_id(auth.uid())
  );

DROP POLICY IF EXISTS "Shift checkins update" ON public.shift_checkins;
CREATE POLICY "Shift checkins update" ON public.shift_checkins
  FOR UPDATE TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin')
    OR staff_id = public.get_user_staff_id(auth.uid())
  )
  WITH CHECK (
    public.has_role(auth.uid(), 'admin')
    OR staff_id = public.get_user_staff_id(auth.uid())
  );

COMMENT ON FUNCTION public.get_user_staff_id(uuid) IS
  'Returns the current authenticated user staff link; arbitrary user IDs are rejected.';
COMMIT;
