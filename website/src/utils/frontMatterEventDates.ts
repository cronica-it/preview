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

// import logger from '@docusaurus/logger'

// If month/day are not present, extend with defaults.
// It does not accept negative values.
const makeDateISO = ((eventDate: string) => {
    let newDate
    if (eventDate.match(/[0-9][0-9]*-[0-9][0-9]*-[0-9][0-9]*/))
        newDate = new Date(eventDate);
    else if (eventDate.match(/[0-9][0-9]*-[0-9][0-9]*/))
        newDate = new Date(eventDate + '-15'); // mid month
    else if (eventDate.match(/[0-9][0-9]*/))
        newDate = new Date(eventDate + '-07-01'); // mid year
    else {
        // Last resort, parse as valid.
        newDate = new Date(eventDate);
    }

    // For weird reasons, 2 digit years are considered relative to epoch.
    // To allow dates in the antiquity, set explicitly.
    const year = eventDate.replace(/-.*/, '')
    newDate.setFullYear(year)

    return newDate.toISOString()
})

const monthNames = [
    '???',
    'Ianuarie',
    'Februarie',
    'Martie',
    'Aprilie',
    'Mai',
    'Iunie',
    'Iulie',
    'August',
    'Septembrie',
    'Octombrie',
    'Noiembrie',
    'Decembrie'
]

const formatDate = ((eventDate) => {
    const eventDateArray = eventDate.split('-').map((str) => parseInt(str))

    if (eventDateArray.length === 3) {
        return `${eventDateArray[2]} ${monthNames[eventDateArray[1]]} ${eventDateArray[0]}`;
    } else if (eventDateArray.length === 2) {
        return `${monthNames[eventDateArray[1]]} ${eventDateArray[0]}`;
    } else if (eventDateArray.length === 1) {
        return `${eventDateArray[0]}`;
    } else {
        return eventDate;
    }
})

const formatEventInterval = ((eventDate, eventEndDate) => {
    const eventDateArray = eventDate.split('-').map((str) => parseInt(str))
    if (eventEndDate === undefined) {
        return formatDate(eventDate);
    } else {
        const eventEndDateArray = eventEndDate.split('-').map((str) => parseInt(str))

        if (eventDateArray[0] === eventEndDateArray[0]) {
            // Same year.
            let interval = ''
            if (eventDateArray.length === 3 && eventEndDateArray.length === 3 && eventDateArray[1] === eventEndDateArray[1]) {
                // Same month, format as '1 - 4 Noiembrie 1993'.
                interval = `${eventDateArray[2]} - ${eventEndDateArray[2]} ${monthNames[eventDateArray[1]]}`;
            } else if (eventDateArray.length >= 2 && eventEndDateArray.length >= 2) {
                // Different months, format as 'Octombrie - Noiembrie 1993'.
                if (eventDateArray.length === 3) {
                    interval += ` ${eventDateArray[2]}`
                }
                interval += ` ${monthNames[eventDateArray[1]]}`
                interval += ` -`
                if (eventEndDateArray.length === 3) {
                    interval += ` ${eventEndDateArray[2]}`
                }
                interval += ` ${monthNames[eventEndDateArray[1]]}`
            } else {
                // One has no month.
                return `${formatDate(eventDate)} - ${formatDate(eventEndDate)}`;
            }
            return `${interval} ${eventDateArray[0]}`
        } else {
            // Different years.
            return `${formatDate(eventDate)} - ${formatDate(eventEndDate)}`;
        }
    }
})

export const parseFrontMatterEventDates = async (params) => {
    // Reuse the default parser
    const result = await params.defaultParseFrontMatter(params);

    if (result.frontMatter.eventDate) {
        result.frontMatter.eventDateISO = makeDateISO(result.frontMatter.eventDate)
        result.frontMatter.eventDateFormatted = formatDate(result.frontMatter.eventDate)

        if (result.frontMatter.eventEndDate) {
            result.frontMatter.eventEndDateISO = makeDateISO(result.frontMatter.eventEndDate)
            result.frontMatter.eventIntervalFormatted = formatEventInterval(
                result.frontMatter.eventDate, result.frontMatter.eventEndDate);
        } else {
            result.frontMatter.eventEndDateISO = result.frontMatter.eventDateISO
            result.frontMatter.eventIntervalFormatted = result.frontMatter.eventDateFormatted
        }
    } else if (result.frontMatter.date) {
        result.frontMatter.eventDateISO = new Date(result.frontMatter.date);
        result.frontMatter.eventEndDateISO = result.frontMatter.eventDateISO;

        result.frontMatter.eventDateFormatted = result.frontMatter.date
    }
    // logger.info(result.frontMatter)
    return result;
}

