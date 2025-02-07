"use server";

export async function submitContactForm(formData: FormData) {
    // Simula un retardo para representar una operación asíncrona (como enviar un correo o almacenar en BD)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Form submission:", { name, email, message });

    return {
        message: "Thanks for your message! I'll get back to you soon.",
    };
}
