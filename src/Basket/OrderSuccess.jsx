export default function OrderSuccess() {
    return(
    <>
    <div>
        <h1 className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Ваш заказ успешно создан!</h1>
        <div className="flex w-full grow bg-[#FFFFFF] @container p-4">
          <div className="w-full gap-1 overflow-hidden bg-[#FFFFFF] @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
              
            ></div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Спасибо за ваш заказ! Мы скоро свяжемся с вами.</p>
        <div className="flex px-4 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#019863] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Вернуться на главную</span>
          </button>
        </div>
    </div>
        
    </>
    
    )
}