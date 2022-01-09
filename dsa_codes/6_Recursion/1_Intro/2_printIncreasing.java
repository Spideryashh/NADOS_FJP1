//link : https://nados.pepcoding.com/content/986574de-de28-4d20-9b95-c8b764ce1d05/13be68bd-68ff-4363-a3cc-9d49e8f5ca8e/

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        printIncreasing(n);
    }

    public static void printIncreasing(int n){
        //base case 
        if(n==0){
            return;
        }
        //soln 
        printIncreasing(n-1);
        System.out.println(n);
    }

}