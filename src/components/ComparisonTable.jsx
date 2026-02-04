import React from 'react';
import { Check, X, Star } from 'lucide-react';

export default function ComparisonTable({ products }) {
    // products expected to be: { name, image, rating, price, features: { featureName: boolean/string } }

    if (!products || products.length === 0) return null;

    const featureKeys = Object.keys(products[0].features);

    return (
        <div className="overflow-x-auto my-12 rounded-xl border border-gray-200 shadow-sm not-prose">
            <table className="w-full text-left border-collapse bg-white">
                <thead>
                    <tr>
                        <th className="p-4 border-b border-gray-100 bg-gray-50 min-w-[150px]">Feature</th>
                        {products.map((product, idx) => (
                            <th key={idx} className="p-4 border-b border-gray-100 min-w-[200px] text-center">
                                <div className="font-bold text-lg text-slate-900">{product.name}</div>
                                <div className="flex justify-center items-center gap-1 my-2 text-amber-500">
                                    <span className="font-semibold text-slate-700">{product.rating}</span> <Star size={16} fill="currentColor" />
                                </div>
                                <div className="text-emerald-700 font-bold text-xl">{product.price}</div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {featureKeys.map((feature, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition">
                            <td className="p-4 border-b border-gray-100 font-medium text-slate-700">{feature}</td>
                            {products.map((product, pIdx) => (
                                <td key={pIdx} className="p-4 border-b border-gray-100 text-center text-slate-600">
                                    {typeof product.features[feature] === 'boolean' ? (
                                        product.features[feature] ? (
                                            <Check className="mx-auto text-emerald-500" />
                                        ) : (
                                            <X className="mx-auto text-slate-300" />
                                        )
                                    ) : (
                                        product.features[feature]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td className="p-4 bg-gray-50"></td>
                        {products.map((product, idx) => (
                            <td key={idx} className="p-4 text-center bg-gray-50">
                                <a
                                    href={product.link}
                                    className="inline-block bg-amber-500 hover:bg-amber-400 hover:scale-105 transition text-slate-900 font-bold py-2 px-6 rounded-lg shadow-sm text-sm"
                                >
                                    Buy Now
                                </a>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
