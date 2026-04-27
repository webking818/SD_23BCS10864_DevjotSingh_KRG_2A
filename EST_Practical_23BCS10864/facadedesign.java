public class OrderService {
    public void createOrder(String product, int quantity) {
        System.out.println("Order created for " + product + " with quantity " + quantity);
    }
}
public class PaymentGateway {
    public boolean processPayment(String user, double amount) {
        System.out.println("Processing payment of Rs." + amount + " for user " + user);
        return true; // assume success
    }
}
public class EmailService {
    public void sendEmail(String user, String message) {
        System.out.println("Email sent to " + user + ": " + message);
    }
}
public class OrderFacade {

    private OrderService orderService;
    private PaymentGateway paymentGateway;
    private EmailService emailService;

    public OrderFacade() {
        this.orderService = new OrderService();
        this.paymentGateway = new PaymentGateway();
        this.emailService = new EmailService();
    }

    public void placeOrder(String user, String product, int quantity, double amount) {
        orderService.createOrder(product, quantity);
        boolean paymentSuccess = paymentGateway.processPayment(user, amount);
        if (!paymentSuccess) {
            System.out.println("Payment failed. Order not completed.");
            return;
        }
        emailService.sendEmail(user, "Your order for " + product + " has been placed successfully!");
        System.out.println("Order placed successfully!");
    }
}
