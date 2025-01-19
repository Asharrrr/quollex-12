
export const COUPON_CODES =
{
    TriosaleQuollex:"TriosaleQuollex",
    FridaysaleQuollex: "FridaysaleQuollex",
    WeeklysaleQuollex: "WeeklysaleQuollex",
   
} as const;

export type CouponCode = keyof typeof COUPON_CODES;