import java.util.*;

public class treeSetup {
    public static class Node {
        int data;
        ArrayList<Node> children = new ArrayList<>(); //bhoolna matt

        Node(int data){
            this.data = data;
        }
    }
    public static void main(String[] args) {
    Node root = new Node(10);

    Node twenty = new Node(20);
    root.children.add(twenty);

    Node thirty = new Node(30);
    root.children.add(thirty);

    Node fourty = new Node(40);
    root.children.add(fourty);

    }
}

