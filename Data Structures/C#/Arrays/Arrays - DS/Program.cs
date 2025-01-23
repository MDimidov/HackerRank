//An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  or .

//Reverse an array of integers.

//Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

//Example

//Return .

//Function Description

//Complete the function reverseArray in the editor below.

//reverseArray has the following parameter(s):

//int A[n]: the array to reverse
//Returns

//int[n]: the reversed array
//Input Format

//The first line contains an integer, , the number of integers in .
//The second line contains  space-separated integers that make up .

class Result
{

    /*
     * Complete the 'reverseArray' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts INTEGER_ARRAY a as parameter.
     */

    public static List<int> reverseArray(List<int> a)
    {
        a.Reverse();
        return a;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int arrCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> arr = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(arrTemp => Convert.ToInt32(arrTemp)).ToList();

        List<int> res = Result.reverseArray(arr);

        Console.WriteLine(String.Join(" ", res));

        //textWriter.Flush();
        //textWriter.Close();
    }
}
