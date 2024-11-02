import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './play.css';

export function Login() {
  return (
    <main>
        <div>
            <div class='subheader'>
                <p class="timer">Timer: 0:30</p>
            </div>
            <div class="category-block">
                <p>Today's Category:</p>
                <h2 id="category">Fast Food Places</h2>
            </div>
            <div>
                <form method="get">
                    <input class="entry" placeholder="Entry 1" />
                    <input class="entry" placeholder="Entry 2" />
                    <input class="entry" placeholder="Entry 3" />
                    <input class="entry" placeholder="Entry 4" />
                    <input class="entry" placeholder="Entry 5" />
                    <input class="entry" placeholder="Entry 6" />
                    <input class="entry" placeholder="Entry 7" />
                    <input class="entry" placeholder="Entry 8" />
                    <input class="entry" placeholder="Entry 9" />
                    <input class="entry" placeholder="Entry 10"/>
                    <div class="container-fluid text-center">
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
            <p>Thank you for your submission. Your answers will now be graded and checked by a third party service. </p>
    </main>
  );
}
