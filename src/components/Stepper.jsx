export default function Stepper({ currentStep, totalSteps, className }) {
  return (
    <div
      className={`flex items-center transition-all duration-500 p-3 ${className}`}
    >
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-7 sm:w-10 transition-all duration-500 rounded-full flex items-center justify-center text-sm  
              ${
                step <= currentStep
                  ? "bg-purple-1 text-white"
                  : "border-2 border-purple-1 text-purple-1"
              }
              aspect-square // This ensures the height adjusts according to the width, maintaining a square aspect ratio
            `}
          >
            {step < currentStep || step === currentStep ? (
              <span className="font-bold">✓</span>
            ) : (
              <span
                className={`font-Monsterrat  ${
                  step >= currentStep && "font-MonsterratBold font-bold"
                }`}
              >
                {step}
              </span>
            )}
          </div>
          {step < totalSteps && (
            <div
              className={`w-[12px] sm:w-3 transition-all duration-500 h-[4px]
                ${step < currentStep ? "bg-purple-1" : "bg-purple-1/20"}
              `}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// export default function Stepper({ currentStep, totalSteps, className }) {
//   return (
//     <div
//       className={`flex items-center transition-all duration-500 p-3 ${className}`}
//     >
//       {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
//         <div key={step} className="flex items-center">
//           <div
//             className={`
//               w-7 sm:w-10 transition-all duration-500 rounded-full flex items-center justify-center text-sm
//               ${
//                 step <= currentStep
//                   ? "bg-purple-1 text-white"
//                   : "border-2 border-purple-1 text-purple-1"
//               }
//               aspect-square // This ensures the height adjusts according to the width, maintaining a square aspect ratio
//             `}
//           >
//             {step < currentStep ? (
//               <span className="font-bold">✓</span>
//             ) : (
//               <span
//                 className={`font-Monsterrat  ${
//                   step >= currentStep && "font-MonsterratBold font-bold"
//                 }`}
//               >
//                 {step}
//               </span>
//             )}
//           </div>
//           {step < totalSteps && (
//             <div
//               className={`
//                 w-[12px] sm:w-3 transition-all duration-500 h-[4px]
//                 ${step < currentStep ? "bg-purple-1" : "bg-purple-1/20"}
//               `}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
