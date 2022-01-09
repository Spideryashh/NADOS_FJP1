// link : https://nados.pepcoding.com/content/986574de-de28-4d20-9b95-c8b764ce1d05/c2dbff03-98ef-484f-b8ee-63a11007619c/

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
            int n = scn.nextInt();
            pdi(n);
    }

    public static void pdi(int n){
        //base case
        if(n==0){
            return;
        }
        System.out.println(n);
        pdi(n-1);
        System.out.println(n);
    }
}
