import satori from "satori";
import loadGoogleFonts from "../loadGoogleFont";

export default async post => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#F1EBE7", // warm paper background
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                flex: 1,
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    style: {
                      fontSize: 80,
                      fontWeight: "500",
                      fontFamily: "Source Serif 4",
                      color: "#DA7756", // accent color
                      lineHeight: "1.05",
                      maxWidth: "90%",
                      margin: 0,
                      marginBottom: "10px",
                    },
                    children: post.data.title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 48,
                      fontWeight: "600",
                      fontFamily: "Source Serif 4",
                      color: "#161517", // dark text
                      lineHeight: "1",
                    },
                    children: "Trevor",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 48,
                      fontWeight: "600", 
                      fontFamily: "Source Serif 4",
                      color: "#161517", // dark text
                      lineHeight: "1",
                    },
                    children: "Pfizenmaier",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(post.data.title + "Trevor Pfizenmaier"),
    }
  );
};
