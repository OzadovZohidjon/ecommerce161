import * as React from 'react'

const BagIcon = (props) => (
    <svg
        width={20}
        height={20}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        {/* <path
            d='M2.15 17.059c-.747-2.876-1.042-6.398-1.124-8.31A.963.963 0 0 1 2 7.75h16c.552 0 .998.447.974.999-.082 1.912-.377 5.434-1.124 8.31-.2.77-.763 1.37-1.546 1.515-1.171.216-3.19.426-6.304.426-3.113 0-5.133-.21-6.304-.426-.783-.145-1.346-.745-1.546-1.515Z'
            fill='transparent'
        /> */}
        <path
            d='m1.026 8.749-.75.032.75-.032Zm1.124 8.31.726-.189-.726.189Zm1.546 1.515.136-.738-.136.738Zm15.278-9.825.75.032-.75-.032Zm-1.124 8.31.726.188-.726-.188Zm-1.546 1.515-.136-.738.136.738ZM.276 8.78c.083 1.931.382 5.515 1.148 8.466l1.452-.377c-.727-2.8-1.02-6.261-1.101-8.153L.276 8.78ZM3.56 19.31c1.23.227 3.297.439 6.44.439v-1.5c-3.084 0-5.055-.209-6.168-.414l-.272 1.475ZM18.225 8.717c-.081 1.892-.374 5.353-1.1 8.153l1.451.377c.766-2.951 1.065-6.534 1.148-8.466l-1.499-.064Zm-2.057 9.119c-1.113.205-3.084.414-6.168.414v1.5c3.143 0 5.21-.212 6.44-.439l-.272-1.475ZM2 8.5h16V7H2v1.5Zm15.124 8.37c-.138.532-.502.882-.956.966l.272 1.475c1.112-.205 1.874-1.056 2.136-2.064l-1.452-.377Zm2.6-8.09C19.766 7.785 18.96 7 18 7v1.5c.144 0 .23.11.225.217l1.499.064Zm-18.3 8.467c.262 1.008 1.024 1.86 2.136 2.064l.272-1.475c-.454-.084-.818-.434-.956-.966l-1.452.377Zm.35-8.53C1.77 8.609 1.857 8.5 2 8.5V7C1.04 7 .234 7.784.276 8.78l1.499-.063Z'
            fill='#353949'
        />
        <path
            d='M4 7.75a.75.75 0 0 0 1.5 0H4Zm10.5 0a.75.75 0 0 0 1.5 0h-1.5Zm-9 0V6H4v1.75h1.5Zm4.25-6h.5V.25h-.5v1.5ZM14.5 6v1.75H16V6h-1.5Zm-4.25-4.25A4.25 4.25 0 0 1 14.5 6H16A5.75 5.75 0 0 0 10.25.25v1.5ZM5.5 6a4.25 4.25 0 0 1 4.25-4.25V.25A5.75 5.75 0 0 0 4 6h1.5Z'
            fill='#353949'
        />
        <path
            d='M7 12.25v2.25m6-2.25v2.25'
            stroke='#353949'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

export default BagIcon
