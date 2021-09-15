import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int sourceBase = scn.nextInt();
    int  destBase = scn.nextInt();
    int ans = anyBaseToAnyBase(n, sourceBase, destBase);
    System.out.print(ans);
  }

  public static int anyBaseToAnyBase(int n, int b1, int b2) {
    int Dans = anyBaseToDecimal(n, b1);
    int fans = DecimalToAnyBase(Dans, b2);
    return fans;
  }

  public static int anyBaseToDecimal(int n, int b1) {
    int Dans = 0;
    int bp = 1; //b^0
    while (n != 0) {
      int r = n % 10;
      n = n / 10;
      Dans = Dans + r * bp;
      bp = bp * b1;
    }
    return Dans;
  }

  public static int DecimalToAnyBase(int Dans, int b2) {
    int fans = 0;
    int tp = 1; //10^0
    while (Dans != 0) {
      int r = Dans % b2;
      Dans = Dans / b2;
      fans = fans + r * tp;
      tp = tp * 10;
    }
    return fans;
  }
}