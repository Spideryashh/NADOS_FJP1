import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int []arr = new int [n];
    for(int i=0;i<arr.length;i++){
        arr[i]=scn.nextInt();
    }
    int d = scn.nextInt();
    
    int found = -1;
    for(int i=0;i<arr.length;i++){
        if(arr[i]==d){
            found = i;
             break;
        }
    }
    System.out.print(found);
 }

}