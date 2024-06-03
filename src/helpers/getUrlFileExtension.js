const GetUrlFileExtension = (fileUrl) => {
    const extension = fileUrl.split('.').pop().split(/\#|\?/)[0];
    return extension;
};

export default GetUrlFileExtension;