import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const salesType = defineType({
    name: 'sale',
    title: 'Sale',
    type: 'document',
    icon: TagIcon,
    fields: [


        defineField({
            name: 'title',
            title: 'sale title',
            type: 'string',
        }),


         defineField({
            name: 'description',
            title: 'sale description',
            type: 'text',
        }),
        defineField({
            name: 'discountamount',
            title: 'Discount Amount',
            type: 'number',
            description: 'Amount of discount in percentage or value',
        }),
        //  defineField({
        //     name: 'date',
        //     title: 'Date',
        //     type: 'datetime',
        // }),
        defineField({
            name: 'coupenCode',
            title: 'Coupen Code',
            type: 'string',
        }),
        defineField({
            name: 'validFrom',
            title: 'Valid From',
            type: 'datetime', 
        }), 
        defineField({
            name: 'validUntil',
            title: 'Valid Until',
            type: 'datetime',
        }),
        defineField({  
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            description: 'Toggle to activate or deactivate the sale',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            discountamount: 'discountamount',
            coupenCode: 'coupenCode',
            isActive: 'isActive',


        },
        prepare(selection) {
            const { title, discountamount, coupenCode, isActive } = selection;
            const status = isActive ? 'Active' : 'Inactive';
            return {
                title,
                subtitle: `${discountamount}% off | ${coupenCode} | ${status}`,
            };
        },
    },
});