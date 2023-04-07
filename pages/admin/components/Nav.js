import Link from "next/link";
const Nav = () => {
  return (
    <div className="nav w-100 bg-dark text-center">
      <div className="me-auto ms-auto">
        <div className="bg-primary p-2 m-2 d-inline-block">
          <Link href="/admin/add" className="text-light">
            add thing
          </Link>
        </div>
        <div className="bg-primary p-2 m-2 d-inline-block">
          <Link href="admin/resault" className="text-light">
            resault
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Nav;
