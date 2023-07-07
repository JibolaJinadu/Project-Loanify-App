function NavbarItem(props) {
  return (
    <>
      <div style={{ paddingInline: '9px' }}>{props.title}</div>
      <div>{props.icons}</div>
    </>
  );
}
export default NavbarItem;
