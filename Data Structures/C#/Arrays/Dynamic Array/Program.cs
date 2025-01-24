//Declare a 2-dimensional array, , of  empty arrays. All arrays are zero indexed.
//Declare an integer, , and initialize it to .

//There are  types of queries, given as an array of strings for you to parse:

//Query: 1 x y
//Let .
//Append the integer  to .
//Query: 2 x y
//Let .
//Assign the value  to .
//Store the new value of  to an answers array.
//Note:  is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia.  is the modulo operator.
//Finally, size(arr[idx]) is the number of elements in arr[idx]

//Function Description

//Complete the dynamicArray function below.

//dynamicArray has the following parameters:
//-int n: the number of empty arrays to initialize in 
//- string queries[q]: query strings that contain 3 space-separated integers

//Returns

//int[]: the results of each type 2 query in the order they are presented
//Input Format

//The first line contains two space-separated integers, , the size of  to create, and, the number of queries, respectively.
//Each of the  subsequent lines contains a query string, .

//Constraints

//It is guaranteed that query type  will never query an empty array or index.

class Result
{

    /*
     * Complete the 'dynamicArray' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts following parameters:
     *  1. INTEGER n
     *  2. 2D_INTEGER_ARRAY queries
     */

    public static List<int> dynamicArray(int n, List<List<int>> queries)
    {
        int lastInt = 0;
        List<List<int>> arr = new();

        for (int i = 0; i < n; i++)
        {
            arr.Add(new());
        }

        List<int> result = new();

        foreach (var query in queries)
        {
            int index = (query[1] ^ lastInt) % n;

            if (query[0] == 1)
            {
                arr[index].Add(query[2]);
            }
            else
            {
                int index2 = query[2] % arr[index].Count;
                lastInt = arr[index][index2];
                result.Add(lastInt);
            }
        }
        return result;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

        int n = Convert.ToInt32(firstMultipleInput[0]);

        int q = Convert.ToInt32(firstMultipleInput[1]);

        List<List<int>> queries = new List<List<int>>();

        for (int i = 0; i < q; i++)
        {
            queries.Add(Console.ReadLine().TrimEnd().Split(' ').ToList().Select(queriesTemp => Convert.ToInt32(queriesTemp)).ToList());
        }

        List<int> result = Result.dynamicArray(n, queries);

        Console.WriteLine(String.Join("\n", result));

        //textWriter.Flush();
        //textWriter.Close();
    }
}
