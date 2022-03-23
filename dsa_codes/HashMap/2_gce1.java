// ques => https://www.pepcoding.com/resources/online-java-foundation/hashmap-and-heap/gce1-official/ojquestion

import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n1 = scn.nextInt();
    int[] arr1 = new int[n1];
    for(int i=0;i<arr1.length;i++){
        arr1[i]=scn.nextInt();
    }
    
    int n2 = scn.nextInt();
    int[] arr2 = new int[n2];
    for(int i=0;i<arr2.length;i++){
        arr2[i]=scn.nextInt();
    }
    
    HashMap<Integer, Integer> fmap = new HashMap<>();
    for(int val: arr1){
        if(fmap.containsKey(val) == false){
            fmap.put(val, 1);
        }else{
            int of = fmap.get(val);
            int nf = of+1;
            fmap.put(val,nf);
        }
    }
    
    //travel through seecond array, print and remove
    for(int val:arr2){
        if(fmap.containsKey(val) == true){
            System.out.println(val);
            fmap.remove(val);
        }
    }
 }
}