import styled from "styled-components"

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string

        colors: {
            primary: string
            text: string,
            lightText: string,
            light: string,
            border: string,
            inputBackground: string,
            shadow: string,
            bold: string,
            background: string,
            error: string,
            link: string,
        }
    }
}