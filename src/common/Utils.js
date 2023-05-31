export class DateUtil {

    static isDate(dateStr) {
        return !isNaN(new Date(dateStr).getDate()); // works like charm on all browsers
        return (new Date(dateStr) !== "Invalid Date") && !isNaN(new Date(dateStr));
        return (isNaN(dateStr) && !isNaN(Date.parse(dateStr)))
    }

    static formatDate(date) {
        // Function to format the date
        if (date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = String(date.getFullYear());
            return `${day}-${month}-${year}`;
        }
        alert('Trrr... date you want to format is not a good one !')
        return 'Your INPUT date is not in VALID FORMAT';
    }

    static getCurrentDate() {
        // Function to get the current date
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return date;
    }

    static getTodayInISOString() {
        return new Date().toISOString().slice(0, 10);
    }

    // https://nsdateformatter.com/
    // returns 5/27/2023 i.e  
    static getTodayInLocaleDateString() {
        return new Date().toLocaleDateString();
    }

    static formatAnyDate = (dateString, inputFormat, outputFormat) => {
        const parsedDate = this.parseDate(dateString, inputFormat);
        const formattedDate = formatDateObject(parsedDate, outputFormat);
        return formattedDate;
    }

    static parseDate = (dateString, inputFormat) => {
        const dateParts = inputFormat.split(/[^A-Za-z]+/);
        const valueParts = dateString.split(/[^0-9]+/);

        const dateValues = {};
        dateParts.forEach((part, index) => {
            dateValues[part.toLowerCase()] = parseInt(valueParts[index], 10);
        });

        const { day, month, year } = dateValues;

        return new Date(year, month - 1, day);
    };

    static formatDateObject = (date, outputFormat) => {
        const formattedDate = outputFormat
            .replace('DD', String(date.getDate()).padStart(2, '0'))
            .replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
            .replace('YYYY', String(date.getFullYear()));

        return formattedDate;
    };



    // Add more date-related utility functions as needed
}
