const formatDate = (date) => {
    if (date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        return `${day}-${month}-${year}`;
    }
    return '';
};

export const formatAnyDate = (dateString, inputFormat, outputFormat) => {
    const parsedDate = parseDate(dateString, inputFormat);
    const formattedDate = formatDateObject(parsedDate, outputFormat);

    return formattedDate;
};

const parseDate = (dateString, inputFormat) => {
    const dateParts = inputFormat.split(/[^A-Za-z]+/);
    const valueParts = dateString.split(/[^0-9]+/);

    const dateValues = {};
    dateParts.forEach((part, index) => {
        dateValues[part.toLowerCase()] = parseInt(valueParts[index], 10);
    });

    const { day, month, year } = dateValues;

    return new Date(year, month - 1, day);
};

const formatDateObject = (date, outputFormat) => {
    const formattedDate = outputFormat
        .replace('DD', String(date.getDate()).padStart(2, '0'))
        .replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
        .replace('YYYY', String(date.getFullYear()));

    return formattedDate;
};
