
public class BandeiraCartaoValidator {

    public static String identificarBandeira(String numeroCartao) {
        if (numeroCartao == null || numeroCartao.length() < 6) {
            return "Bandeira desconhecida";
        }

        String prefixo2 = numeroCartao.substring(0, 2);
        String prefixo3 = numeroCartao.length() >= 3 ? numeroCartao.substring(0, 3) : "";
        String prefixo4 = numeroCartao.length() >= 4 ? numeroCartao.substring(0, 4) : "";
        String prefixo6 = numeroCartao.length() >= 6 ? numeroCartao.substring(0, 6) : "";

        int prefixoInt2 = Integer.parseInt(prefixo2);
        int prefixoInt3 = !prefixo3.isEmpty() ? Integer.parseInt(prefixo3) : -1;
        int prefixoInt4 = !prefixo4.isEmpty() ? Integer.parseInt(prefixo4) : -1;
        int prefixoInt6 = !prefixo6.isEmpty() ? Integer.parseInt(prefixo6) : -1;

        // Visa
        if (numeroCartao.startsWith("4")) {
            return "Visa";
        }

        // Mastercard
        if ((prefixoInt2 >= 51 && prefixoInt2 <= 55) || (prefixoInt4 >= 2221 && prefixoInt4 <= 2720)) {
            return "Mastercard";
        }

        // American Express
        if (prefixo2.equals("34") || prefixo2.equals("37")) {
            return "American Express";
        }

        // Diners Club
        if ((prefixoInt3 >= 300 && prefixoInt3 <= 305) ||
            prefixo2.equals("36") || prefixo2.equals("38") || prefixo2.equals("39")) {
            return "Diners Club";
        }

        // Discover
        if (numeroCartao.startsWith("6011") ||
            numeroCartao.startsWith("65") ||
            (prefixoInt3 >= 644 && prefixoInt3 <= 649) ||
            (prefixoInt6 >= 622126 && prefixoInt6 <= 622925)) {
            return "Discover";
        }

        // enRoute
        if (prefixo4.equals("2014") || prefixo4.equals("2149")) {
            return "enRoute";
        }

        // JCB
        if (prefixoInt4 >= 3528 && prefixoInt4 <= 3589) {
            return "JCB";
        }

        // Voyage
        if (prefixo4.equals("8699")) {
            return "Voyage";
        }

        // Hipercard
        if (prefixo6.equals("606282") || prefixo4.equals("3841")) {
            return "Hipercard";
        }

        // Aura
        if (prefixo4.equals("5078") || prefixo4.equals("5021")) {
            return "Aura";
        }

        return "Bandeira desconhecida";
    }

    public static void main(String[] args) {
        System.out.println("Visa: " + identificarBandeira("4123456789012345"));
        System.out.println("Mastercard: " + identificarBandeira("5123456789012345"));
        System.out.println("Amex: " + identificarBandeira("341234567890123"));
        System.out.println("Diners Club: " + identificarBandeira("30569309025904"));
        System.out.println("Discover: " + identificarBandeira("6011123456789012"));
        System.out.println("enRoute: " + identificarBandeira("201400000000009"));
        System.out.println("JCB: " + identificarBandeira("3530111333300000"));
        System.out.println("Voyage: " + identificarBandeira("8699123412341234"));
        System.out.println("Hipercard: " + identificarBandeira("6062825624254001"));
        System.out.println("Aura: " + identificarBandeira("5078601870000127987"));
    }
}
