import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    //part 1 input
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[]arr=new int[n];
    for(int i=0;i<arr.length;i++){
        arr[i]=scn.nextInt();
    }
    int d = scn.nextInt();
    
    // part 2 code
    int ceil=-1,floor=-1;
    int left = 0;
    int right=arr.length-1;
    
    while(left<=right){
        int mid = (left+right)/2;
        
        if(d < arr[mid]){
            right = mid -1;
            ceil = arr[mid];
        }else if(d>arr[mid]){
            left = mid+1;
            floor = arr[mid];
        }else{
            floor= arr[mid];
            ceil= arr[mid];
        }
    }
    System.out.println(ceil);
    System.out.print(floor);
 }
}