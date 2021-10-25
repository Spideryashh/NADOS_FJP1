//link : https://nados.pepcoding.com/content/986574de-de28-4d20-9b95-c8b764ce1d05/6a915f2c-d6fd-4561-9cda-fceabe22db40/

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        // write your code here
        int n = scn.nextInt();
        printDecreasing(n);
    }

    public static void printDecreasing(int n){
        //base case
        if(n==0){
            return;
        }
        //soln
        System.out.println(n);
        printDecreasing(n-1);
    }
}