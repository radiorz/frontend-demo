import Page from 'vite-plugin-pages'

//  用于 test 路由的生成 比较方便
const config =  {
  dirs: [
    // { dir: "src/views", baseRoute: "" },
    { dir: "src/test/views", baseRoute: "test" },
    // { dir: "src/features/**/pages", baseRoute: "features" },
    // { dir: "src/admin/pages", baseRoute: "admin" },
  ],
  // extensions: ["vue", "md"],
};
export default Page(config);
