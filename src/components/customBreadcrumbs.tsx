import React from "react";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@mantine/core";
import Link from "next/link";
const CustomBreadCums = () => {
  const router = useRouter();
  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split("?")[0];
    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);
    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
      const title = subpath;
      return { title, href };
    });
    // Add in a default "Home" crumb for the top-level
    return [{ title: "Trang chủ", href: "/" }, ...crumblist];
  }
  const breadcrumbs = generateBreadcrumbs();

  return (
    <div>
      <Breadcrumbs separator="→" mb={10}>
        {breadcrumbs.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={index}
              style={{ textDecoration: "underline" }}
            >
              <div>{item.title}</div>
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadCums;
