import React, {useContext} from "react"
import { QuantityContext } from "../LIst/List"

function Footer() {

    const quantity = useContext(QuantityContext)

    return(
        <div className="flex px-4 py-3">
             <button
             className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#ee7f2b] text-[#181411] text-base font-bold leading-normal tracking-[0.015em]"
             >
                <span className="truncate">Корзина ({quantity})</span>
            </button>
        </div>
    )
}

export default Footer