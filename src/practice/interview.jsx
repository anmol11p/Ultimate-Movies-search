  {/* {student.length && "no student found"}{" "} */}
      {/*    if first expression is false in this it will not render right expression that's why it give 0 */}

      {/* solution 1 */}
      {student.length === 0 && "no student found"}
          <p>no. of student:{student.length}</p>
           {/* solution 2 */}
      {!student.length  && "no student found"}