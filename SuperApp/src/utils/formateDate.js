const formatDate = (date = Date.now()) => {
    const newDate = new Date(date);
    const formatedTime = newDate.toLocaleTimeString("en-US", {
        hour : "numeric",
        minute : "numeric",
        second : "numeric"
    });
    const formatedDate = newDate.toLocaleDateString("en-US", {
        month : "long",
        day : "numeric",
        year : "numeric"
    });

    return {
        date : formatedDate,
        time : formatedTime
    }
};

export default formatDate;