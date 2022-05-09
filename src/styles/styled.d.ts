import styled from "styled-components"

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string

        colors: {
            primary: string
            text: string,
            light: string,
            border: string,
            inputBackground: string,
            shadow: string,
            bold: string,
            background: string,
        }
    }
}