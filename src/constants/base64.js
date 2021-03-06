const preloadImageWithPromise = (src) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const timeout = setTimeout(() => {
      image.onload = null;
      reject(`Error: unable to load ${src} in 15s`);
    }, 15000);
    image.onload = () => {
      clearTimeout(timeout);
      resolve();
    };
    image.src = src;
  });
};

const heroBase64 =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QCARXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAABAygAwAEAAAAAQAAAsgAAAAA/9sAQwADAgICAgIDAgICAwMDAwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/8AACwgAEQAZAQERAP/EABkAAAMAAwAAAAAAAAAAAAAAAAgHAwIFBv/EAC8QAAEDAwICBgsAAAAAAAAAAAECAwQFABEHBhIIITFREzIJFBUXIkFCUlNxobH/2gAIAQEAAD8ARejfLnu3WYTU7SZjuOQENrf7+SGuhecYyDnqNsiRyG61RE4FEir7Cmeyf7Y/6j7Cq+n+45G2a22WqhDcLb7YWlYScA9aeg9BF8n3C+w2QHLVziP8u7tVWjT+PXvWYYSeOcWC2GyrqwhWc8X6sjpPmzUafSZMf2NGPOcbKWSupBTPEfqIbCgPwDYh6zbhrOpldm6rF3biEVeYOKBAqqHpDClIAALSsOcPueLhwPjav9MkfaF6pXiN49l2T8t3v//Z";

const landingBase64 =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QCARXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAABMigAwAEAAAAAQAAA5YAAAAA/9sAQwADAgICAgIDAgICAwMDAwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/9sAQwEDAwMEAwQIBAQIEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAEwAZAwERAAIRAQMRAf/EABsAAAEEAwAAAAAAAAAAAAAAAAYHAgMEBQgJ/8QALxAAAQMDAgEJCQAAAAAAAAAAAQIDBAURABIGBxUxMiNBVGHRExYhUVZxkZKUof/EABkBAAMBAQEAAAAAAAAAAAAAAAMEAQYFAv/EACYRAAECBQMDBQAAAAAAAAAAAAECABEDBBIhE1HBMSKxQVKBkeH/2gAMAwEAAhEDEQA/AOc+36LOqz0pNNZU4uJHXKdIICW209JRv9bfHBK6ZZkjMA7kNts059a4oU6HWwh3XbQCDcW7ebAmNwbSIWkwy5y4mOhLik6gbhNs82ksxWEt/KCu7o/M+eSwbuax2Y/S6vNp0h9UGQ4z6zK4zuk2C21dJJHaMaIw+ek90XkYsoiky1gXKXmefxC8CR3BsIXBB+OWo+wuKW3qJw4reyKvs3lqoVRxRhrKRoYCkgaielcEXFvvgVyipYWDCDqVxxBifsbvD5Vq36S/LLqy/cPtl017Mr3rw/2hRlzDTaQGdDa1J691VjfxUcWp6mbMAuPhtVNHJlxtT5Ynw8p8OpSJEOdHS8yqTGBQrmI6zGapRQi5PWB4adEhMxVquhI5apcNdrUB7iQ22umN6E1VDIQkqSktlvVpIBsRf32OcSqqJppY3enL0EumlS621Kcfj3V5FpXcm/7mL15m70mkjZ//2Q==";

export { heroBase64, landingBase64, preloadImageWithPromise };
