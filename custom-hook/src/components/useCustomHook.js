import { useEffect } from "react"

const useCustomHook = (props) => {
    document.title = props + 'See here';
}

export default useCustomHook;