// import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
// import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

// export default async function TsQuollex() {
//   const sale = await getActiveSaleByCouponCode(COUPON_CODES.TriosaleQuollex);

//   if (!sale?.isActive) {
//     return null;
//   }

//   return (
//     <div className="bg-gradient-to-r from-gray-600 to-black text-white px-10 py-2 rounded-lg shadow-lg">
//       <h2>{sale?.title}</h2>
//       TRIO SALE GET 25% OFF IN EACH ORDER BY APPLYING THIS COUPON CODE
//       {/* <span className="bg-white text-black px-2 ml-2 rounded">
//         {sale?.couponCode}
//       </span> */}
//     </div>
//   );
// }


import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

export default async function TsQuollex() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.TriosaleQuollex);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="py-10 mx-4 mt-2 rounded-lg shadow-lg bg-gradient-to-r from-gray-600 to-black text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4">
            {sale.title}
          </h2>
          <p className="text-left text-xl sm:text-3xl font-semibold mb-6">
            {sale.description}
          </p>
          <div className="flex">
            <div className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
              <span className="font-bold text-base sm:text-xl">
                Use code:{" "}
              </span>
              <span className="text-red-600 font-bold text-xl">
                {sale.couponCode}
              </span>
            </div>
            <span className="ml-2 font-bold text-base sm:text-xl">
              for {sale.discountAmount}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}



// import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
// import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

// export default async function TsQuollex() {
//   const sale = await getActiveSaleByCouponCode(COUPON_CODES.TriosaleQuollex);

//   if (!sale?.isActive) {
//     return null;
//   }

//   return (
//     <div className="bg-gradient-to-r from-gray-600 to-black text-white px-10 py-2 rounded-lg shadow-lg">
//       <h2>{sale?.title}</h2>
//       <p>
//         TRIO SALE - GET 25% OFF ON EACH ORDER BY APPLYING THIS COUPON CODE:
//         <span className="bg-white text-black px-2 ml-2 rounded">
//           {sale?.coupenCode}
//         </span>
//       </p>
//     </div>

// )

// }