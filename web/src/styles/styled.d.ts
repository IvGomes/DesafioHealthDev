// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;

        background: string;
        backgroundBody: string;
        textTitles: string;
        textSecondary: string;
        textDescription: string;

        buttonFormsBg: string;
        buttonFormsText: string;
        buttonFormsHover: string;

        icons: string;
        iconsHover: string;

        avatarBorderColor: string;
        avatarPreviewBorder: string;

        statusOnline: string;
        statusOffline: string;
        statusAway: string;

        border: string;

        focusInput: string;
        borderInputs: string;
        disabledInputs: string;

        switchInativeBg: string;
        switchInativeBorder: string;
        switchActiveBg: string;
        switchActiveBorder: string;

        divider: string;

        shadow: string;
    }
  }
}