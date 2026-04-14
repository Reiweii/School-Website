from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "supersecretkey"


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/programs')
def programs():
    return render_template('programs.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/enrollment', methods=['GET', 'POST'])
def enrollment():
    if request.method == 'POST':
       
        child_name = request.form.get('childName')
        birth_date = request.form.get('birthDate')
        gender = request.form.get('gender')
        parent_name = request.form.get('parentName')
        contact_number = request.form.get('contactNumber')
        email = request.form.get('email')
        address = request.form.get('address')

    
        total_fee = 2500 + 15000  
        for key in ['learningMaterials', 'activityFee']:
            value = request.form.get(key)
            if value:
                total_fee += int(value)

        flash(f"Enrollment submitted successfully for {child_name}! Total Fee: ₱{total_fee}", "success")
        return redirect(url_for('enrollment'))

    return render_template('enrollment.html')

@app.route('/facilities')
def facilities():
    return render_template('facilities.html')

@app.route('/tuition')
def tuition():
    return render_template('tuition.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/tools')
def tools():
    return render_template('tools.html')

@app.route('/policies')
def policies():
    return render_template('policies.html')

@app.route('/marketing')
def marketing():
    return render_template('marketing.html')



if __name__ == '__main__':
    app.run(debug=True)