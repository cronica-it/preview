/*
 * This file is part of the Cronica-IT project (https://github.com/cronica-it).
 * Copyright (c) 2023 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/license/mit/.
 */

// Reverse chronological order.
const compareDates = ((aEventDateMillis, bEventDateMillis) => {
    return bEventDateMillis - aEventDateMillis;
})

export const eventDateComparator = ((a, b) => {
    const aEventDateMillis = new Date(a.metadata.frontMatter.eventDateISO || a.metadata.date);
    const bEventDateMillis = new Date(b.metadata.frontMatter.eventDateISO || b.metadata.date);
    // logger.info(aEventDate);
    // logger.info(bEventDate);

    const value = compareDates(aEventDateMillis, bEventDateMillis);
    if (value !== 0)
        return value

    const aEventEndDateMillis = new Date(a.metadata.frontMatter.eventEndDateISO || a.metadata.date);
    const bEventEndDateMillis = new Date(b.metadata.frontMatter.eventEndDateISO || b.metadata.date);

    return compareDates(aEventEndDateMillis, bEventEndDateMillis)
})
