const settings = {
  name: "african-union",
  state: {
    frontity: {
      url: "https://au.int/",
      title: "African Union",
      description:
        "Promoting Africa's growth and economic development by championing citizen inclusion and increased cooperation and integration of African states.",
    },
  },
  packages: [
    {
      name: "african_union_1",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://staging.capetownetc.com",
          api: "https://staging.capetownetc.com/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
