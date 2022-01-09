import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        // write ur code here

        //input of strings
        String a = scn.next();  //takes input till space or enter
        System.out.println(a);
        
        String b = scn.nextLine(); //takes input till enter only
        System.out.println(b);
        
        String s1 = "hello";
        s1 += "world";
        System.out.println(s1);  //output : helloworld #strings can be added
        
        String d2 = 10 + 20 +"hello" + 10 + 20;
        System.out.println(d2);  //output : 30hello1020 #int + int = int otherwese string + int or vice versa = string
        
        //substrings print start to end-1 index;
        System.out.println(s1.substring(0,5)); // hello #prints 0 to 4th index
        System.out.println(s1.substring(1,6)); // ellow #1 to 5th
        System.out.println(s1.substring(0,7));
        System.out.println(s1.substring(5));   // world # 5 to end of the string
        System.out.println(s1.substring(6));   // orld  # 6 to end

        String s2 = "YashVarshney";
        System.out.println(s2.length());    //gives the length of the string
        for(int i=0;i<s2.length();i++){     //looop to transverse the whole string
            char ch = s2.charAt(i);         
            System.out.print(ch);           //YashVarshney #printing whole string ch one by one
            System.out.println(ch);         // Y \n a \n s ............every ch and enter because of ln
        }
    }
}