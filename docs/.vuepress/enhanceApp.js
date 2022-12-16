export default ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    console.log("客户端渲染中");
    console.log("路由数据", router);
    console.log("站点元数据", siteData);
  }
};
