module.exports = {
  title: "Python Week Docs",
  description: "Documentation website for Python Week",
  base: "/python-week-docs/",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://laurent-brisebois.github.io/python-week-docs/images/logo1.png",
      },
    ],
  ],
  themeConfig: {
    navbar: true,
    nav: [
      { text: "Course", link: "/course/getting-started/introduction/" },
      // { text: "Student Pages", link: "/students/" },
      {
        text: "GitHub",
        link: "https://github.com/laurent-brisebois/python-week-docs",
      },
    ],
    sidebarDepth: 0,
    logo: "/images/logo1.png",
    sidebar: {
      "/course/": [
        {
          collapsable: true,
          title: "Getting Started",
          children: [
            ["/course/getting-started/introduction.md", "Introduction"],
            ["/course/getting-started/course.md", "Register"],
            ["/course/getting-started/setup.md", "Setup"],
          ],
        },
        {
          collapsable: true,
          title: "Day 1: Software",
          children: [
            ["/course/day1/theory.md", "Theory"],
            ["/course/day1/bash.md", "Bash"],
            ["/course/day1/git.md", "Git"],
            ["/course/day1/links.md", "Links"],
            ["/course/day1/questions.md", "Day 1 Questions"],
          ],
        },
        {
          collapsable: true,
          title: "Day 2: Beginner Python",
          children: [
            ["/course/day2/theory.md", "Theory"],
            ["/course/day2/source-code.md", "Source Code"],
            ["/course/day2/exercises.md", "Exercises"],
            ["/course/day2/questions.md", "Day 2 Questions"],
          ],
        },
        {
          collapsable: true,
          title: "Day 3: Intermediate Python",
          children: [
            ["/course/day3/exercises.md", "Exercises"],
            ["/course/day3/source-code.md", "Source Code"]
          ],
        },
        {
          collapsable: true,
          title: "Day 4: Data Tools",
          children: [
            ["/course/day4/theory", "Theory"],
            ["/course/day4/exercises.md", "Exercises"],
          ],
        },
        {
          collapsable: true,
          title: "Day 5: APIs",
          children: [
            ["/course/day5/info.md", "Info"],
            ["/course/day5/source-code.md", "Source Code"],
          ],
        },
        {
          collapsable: true,
          title: "Examples and Helpers",
          children: [
            ["/course/examples/git.md", "Git"],
            ["/course/examples/bash.md", "Bash"],
            ["/course/examples/html.md", "HTML"],
            ["/course/examples/python.md", "Python"],
          ],
        },
      ],
      // "/students/": [
      //   {
      //     collapsable: true,
      //     title: "Benoît-Paul",
      //     children: [["/students/student0/main.md", "Main"]],
      //   },
      //   {
      //     collapsable: true,
      //     title: "Jason",
      //     children: [["/students/student1/main.md", "Main"]],
      //   },
      //   {
      //     collapsable: true,
      //     title: "Jonathan",
      //     children: [["/students/student2/main.md", "Main"]],
      //   },
      //   {
      //     collapsable: true,
      //     title: "Mohammad",
      //     children: [["/students/student3/main.md", "Main"]],
      //   },
      //   {
      //     collapsable: true,
      //     title: "Firouz",
      //     children: [["/students/student4/main.md", "Main"]],
      //   },
      //   {
      //     collapsable: true,
      //     title: "Ali",
      //     children: [["/students/student5/main.md", "Main"]],
      //   },
      //   {
      //     collapsable: true,
      //     title: "Erwin",
      //     children: [["/students/student6/main.md", "Main"]],
      //   },
      //   {
      //     collapsable: true,
      //     title: "Mohsen",
      //     children: [["/students/student7/main.md", "Main"]],
      //   },
      //   {
      //     collapsable: true,
      //     title: "Charles-Antoine",
      //     children: [
      //       ["/students/student8/main.md", "Main"]
      //     ],
      //   },
      // ],
    },
  },
  // plugins: [
  //   ["vuepress-plugin-serve"]
  // ],
};
