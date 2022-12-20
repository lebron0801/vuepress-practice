module.exports = {
  base: "/vuepress-practice/",
  markdown: {
    lineNumbers: true,
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "WtsDoc",
      description: "Wts Description Document",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "WtsDoc",
      description: "Wts 业务系统描述文档",
    },
  },
  themeConfig: {
    logo: "/logo.png",
    repo: "lebron0801/vuepress-practice",
    editLinks: true,
    docsBranch: "dev",
    docsDir: "docs",
    smoothScroll: false,
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: require("./nav/en"),
        sidebar: {
          "/guide/": getGuideSidebar("Guide", "Advanced"),
          "/plugin/": getPluginSidebar(
            "Plugin",
            "Introduction",
            "Official Plugins"
          ),
          "/theme/": getThemeSidebar("Theme", "Introduction"),
        },
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: require("./nav/zh"),
        sidebar: {
          "/zh/guide/": getGuideSidebar("指南", "深入"),
          "/zh/plugin/": getPluginSidebar("插件", "介绍", "官方插件"),
          "/zh/theme/": getThemeSidebar("主题", "介绍"),
        },
      },
    },
    displayAllHeaders: false,
  },
};

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        "",
        "getting-started",
        "directory-structure",
        "basic-config",
        "assets",
      ],
    },
    {
      title: groupB,
      collapsable: false,
      children: ["frontmatter", "permalinks"],
    },
  ];
}

function getPluginSidebar(pluginTitle, pluginIntro, officialPluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: false,
      children: [["", pluginIntro], "using-a-plugin", "writing-a-plugin"],
    },
    {
      title: officialPluginTitle,
      collapsable: false,
      children: [
        "official/plugin-active-header-links",
        "official/plugin-back-to-top",
      ],
    },
  ];
}

function getThemeSidebar(groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ["", introductionA],
        "using-a-theme",
        "writing-a-theme",
        "default-theme-config",
      ],
    },
  ];
}
