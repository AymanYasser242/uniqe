import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const MainBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{snippet}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb className="my-4 text-lg text-center">
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default MainBreadcrumb;
