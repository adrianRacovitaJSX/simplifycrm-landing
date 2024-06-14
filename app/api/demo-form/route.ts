import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest): Promise<NextResponse> {
  const formData = await request.json();
  console.log("Email enviado correctamente", formData);
  try {
    await resend.emails.send({
      from: "noreply@simplifycrm.es",
      to: ["adrianliviuracovita@gmail.com", "pablor2003@gmail.com"],
      subject: "Solicitud de demo | Simplify CRM",
      html: `
                <html>
                    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                        <div style="background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <h1 style="color: #333; margin-bottom: 20px;">Simplify CRM</h1>
                            <h2 style="color: #333; margin-bottom: 20px;">Solicitud de demo</h2>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Nombre y apellidos</strong></td>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.firstname}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Empresa</strong></td>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.empresa}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email</strong></td>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.email}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Teléfono</strong></td>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.tlf}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px;"><strong>Mensaje</strong></td>
                                    <td style="padding: 10px;">${formData.consulta}</td>
                                </tr>
                            </table>
                        </div>
                    </body>
                </html>
            `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error mandando email:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
