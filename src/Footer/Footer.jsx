import React, {useContext} from "react"
import { QuantityContext } from "../LIst/ListPopular"
import List from "../LIst/ListPopular";

export default function Footer(props) {

    const quantity = useContext(QuantityContext)


    return(
        <>  

            {/*Если блюда не выбраны - кнопка будет гореть серым цветом, если выбраны - красным*/}
            {quantity === 0 ? (
                <div className="flex px-4 py-3">
                    <button
                        className="flex min-w-[30px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-gray-200 text-[#181411] text-base font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">{props.naming} ({quantity})</span>

                    </button>
                </div>
            ) : (
                <div className="flex px-4 py-3">
                    <button onClick={props.onShowBasket}
                        className="flex min-w-[30px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#ee7f2b] text-[#181411] text-base font-bold leading-normal tracking-[0.015em]">
                    
                    {/*Не показываем quantity на кнопке "Заказать" */}
                        {props.hideQuantity ? (
                            <span className="truncate">{props.naming}</span>
                                        ) : (
                            <span className="truncate">{props.naming} ({quantity})</span>
                                             )}

                    </button>
                </div>
            )}
        </>
    )
}

