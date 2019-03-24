const defaultStyleOptions = {
    shape: {
        borderRadius: 2,
    },
    typography: {
        button: {
            textTransform: "normal"
        },
        useNextVariants: true,
        fontFamily: "helvetica-light, Roboto, Arial, sans-serif",
        display1:{
            fontSize: 82,
            fontWeight: "bold",
            color: "#444444",
            lineHeight: "normal"
        },
        display2:{
            fontSize: 50,
            fontWeight: "bold",
            color: "#444444",
            lineHeight: "normal"
        },
        display3:{
            fontSize: 34,
            fontWeight: "bold",
            color: "#444444",
            lineHeight: "normal"
        },
        display4:{
            fontSize: 18,
            fontWeight: "bold",
            color: "#444444",
            lineHeight: "normal"
        }
    },
    colors: {
        dark_purple: "#682165",
        orange: "#ffaa15",
        green: "#00c781",
        black: "#686868",
        white: "#ffffff",
        red: "#eb6969",
        grey: "#757575",
        dark_blue: "#5d38db",
        blue: "#48dbfb"
    },
    text: {
        size: {
            button_medium: 15,
            button_small: 14,

            modal_title: 22,
            modal_body: 16,

            notification_message: 14,

            upload_zone: 14,

            input_text: 14,
            input_helper_text: 14,
            input_placeholder: 14,

            menu_item_label: 12,

            table: 16,

        },
        color: {
            modal_body: "#666666",
            navigation_active: "#fff",
            information_body_highlight: "#672165",
            information_header: "#808184",
            information_body: "#808184",
            upload_zone: "#a1adcd",
            table_header: "#94979b",
            table_body: "#52575a",
        },
        letterSpacing: {

        },
        font: {
            bold: "helvetica-bold"
        }
    },
    margin: {

    },
    boxShadow: {
        table_item_hover: "0 13px 23px -5px rgba(157, 142, 230, 0.34)",
        notification: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        tag: "0 5px 16px 0 rgba(226, 230, 245, 0.8)",
        app_bar: "0 2px 40px 1px rgba(221, 229, 252, 0.5)",
        table: "-10px 9px 21px 0 rgba(128, 152, 213, 0.08)",
        table_header: "0 1px 0 0 rgba(0, 0, 0, 0.06)",
    },
    gradient: {

    },
    padding: {
        modal_control: "36px !important",
        table_content: 20
    }
};

function combinedStyle(style) {
    return Object.assign({...defaultStyleOptions}, {...style})
}

export const themes = {
    purple: combinedStyle({
        palette: {
            primary: {
                main: "#861388",
                contrastText: "#fff"
            },
            secondary: {
                main: "#9c27b0",
                contrastText: "#fff"
            },
            third: {
                main: "#8954ba",
                contrastText: "#fff"
            }
        }
    }),
    green: combinedStyle({
        palette: {
            primary: {
                main: "#43A047",
                contrastText: "#fff"
            },
            secondary: {
                main: "#9CCC65",
                contrastText: "#fff"
            },
            third: {
                main: "#d4e157",
                contrastText: "#fff"
            }
        }
    }),
    orange: combinedStyle({
        palette: {
            primary: {
                main: "#F57C00",
                contrastText: "#fff"
            },
            secondary: {
                main: "#FFA726",
                contrastText: "#fff"
            },
            third: {
                main: "#ff8a65",
                contrastText: "#fff"
            }
        }
    }),
    blue: combinedStyle({
        palette: {
            primary: {
                main: "#2196f3",
                contrastText: "#fff"
            },
            secondary: {
                main: "#4fc3f7",
                contrastText: "#fff"
            },
            third: {
                main: "#80deea",
                contrastText: "#fff"
            }
        }
    })
};
