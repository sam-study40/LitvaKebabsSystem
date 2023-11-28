// Models/Order.cs
public class Order
{
    public int Id { get; set; }
    public List<MenuItem> Items { get; set; } = new List<MenuItem>();
    public decimal TotalPrice => Items.Sum(item => item.Price);
    public DateTime OrderDate { get; set; } = DateTime.UtcNow;
    
}