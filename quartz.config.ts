import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Special Place",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "en-GB",
    baseUrl: "http://localhost:8080",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Raleway",
        body: "Nunito Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFFFF",
          lightgray: "#D6E4F0",
          gray: "#7aadff",
          darkgray: "#5089C6",
          dark: "#173E69",
          secondary: "#7aadff",
          tertiary: "#c0e0f7",
          highlight: "rgba(122, 173, 223, 0.2)",
          textHighlight: "#75AADB88",
        },
        darkMode: {
          light: "#19233d",
          lightgray: "#43A1D5",
          gray: "#53618d",
          darkgray: "#d4d4d4",
          dark: "#FFFFFF",
          secondary: "#7aadff",
          tertiary: "#D5B048",
          highlight: "rgba(122, 173, 223, 0.2)",
          textHighlight: "#f1e64e88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
