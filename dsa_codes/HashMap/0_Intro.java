import java.util.*;

public class Main{
    public static void main(String[] args) throws Exception {
        HashMap<String, Integer> pmap = new HashMap<>();
        //add
        pmap.put("India",130);
        pmap.put("China",200);
        pmap.put("USA",50);
        pmap.put("Russia",30);
        
        System.out.println(pmap);
        //update
        pmap.put("USA",53);
        System.out.println(pmap);
        
        int ipop = pmap.get("India"); // bad practice
        System.out.println(ipop);
        
        Integer uspop = pmap.get("USA"); // capital Integer should be use because in case if there is no value present it gives null
        System.out.println(uspop);
        
        pmap.put("Nigeria",80);
        System.out.println(pmap);
        
        System.out.println(pmap.containsKey("Nigeria"));
        
        Set<String> keys = pmap.keySet();
        for(String key: keys){
            System.out.print(key+" = ");
            System.out.println(pmap.get(key));
        }
    }
}

// OUTPUT =>

// {USA=50, China=200, India=130, Russia=30}
// {USA=53, China=200, India=130, Russia=30}
// 130
// 53
// {USA=53, China=200, Nigeria=80, India=130, Russia=30}
// true
// USA = 53
// China = 200
// Nigeria = 80
// India = 130
// Russia = 30